import { Injectable } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Network } from '@ionic-native/network';
import { ToastProvider } from './toast';
import { TranslateProvider } from './translate';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NetworkProvider {
  private networkOnlineSubscription: Subscription;
  private networkOfflineSubscription: Subscription;
  private connected: boolean;
  public subscription: Subject<boolean> = new Subject<boolean>();

  constructor(private platform: Platform,
    private network: Network,
    public toastCtrl: ToastController,
    private toast: ToastProvider,
    private translate: TranslateProvider) {
    this.init();
  }

  public init(): void {
    console.log("Initializing Network Provider");
    this.platform.ready().then(() => {
      this.subscription = new Subject<boolean>();
      let self = this;
      setTimeout(() => {
        self.networkOnlineSubscription = this.network.onConnect().subscribe(() => {
          self.connected = true;
          self.toast.hide();
          self.subscription.next(true);
        });
        self.networkOfflineSubscription = this.network.onDisconnect().subscribe(() => {
          self.connected = false;
          self.toast.show(this.translate.get('OFFLINE'));
          self.subscription.next(false);
        });
      }, 1000);

      if (this.network.type == 'none') {
        this.connected = false;
      } else {
        this.connected = true;
      }
    });
  }

  public destroy(): void {
    this.networkOnlineSubscription.unsubscribe();
    this.networkOfflineSubscription.unsubscribe();
  }

  public getNetworkType(): Promise<any> {
    return new Promise((resolve) => {
      this.platform.ready().then(() => {
        resolve(this.network.type);
      });
    });
  }

  public getIsConnected(): Promise<any> {
    return new Promise((resolve) => {
      this.platform.ready().then(() => {
        if (this.connected) {
          resolve(this.connected);
        }
        else {
          if (this.network.type) {
            if (this.network.type == 'none') {
              this.toast.show(this.translate.get('OFFLINE'));
              resolve(false);
            } else {
              resolve(true);
            }
          } else {
            resolve(false);
          }
        }
      });
    });
  }

  public online(): boolean {
    return this.connected;
  }
}
