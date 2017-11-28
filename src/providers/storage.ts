import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File, Entry } from '@ionic-native/file';
import { LoadingProvider } from './loading';
import { ToastProvider } from './toast';
import { TranslateProvider } from './translate';
import * as firebase from 'firebase';
import { ToastConfig } from '../configs/toast-config';

@Injectable()
export class StorageProvider {
  private profilePicOptions: CameraOptions;
  private eventPicOptions: CameraOptions;

  constructor(private camera: Camera,
    private file: File,
    private loading: LoadingProvider,
    private toast: ToastProvider,
    private translate: TranslateProvider) {
    console.log("Initializing Storage Provider");
    this.profilePicOptions = {
      quality: 25,
      targetWidth: 288,
      targetHeight: 288,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
      allowEdit: true
    };
    this.eventPicOptions = {
      quality: 50,
      targetWidth: 768,
      targetHeight: 768,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
      allowEdit: true
    };
  }

  uriToBlob(fileURI): Promise<Blob> {
    return new Promise((resolve, reject) => {
      this.file.resolveLocalFilesystemUrl(fileURI).then((fileEntry: Entry) => {
        fileEntry.getParent((directoryEntry: Entry) => {
          this.file.readAsArrayBuffer(directoryEntry.nativeURL, fileEntry.name)
            .then((data: ArrayBuffer) => {
              var uint8Array = new Uint8Array(data);
              var buffer = uint8Array.buffer;
              let blob = new Blob([buffer]);
              resolve(blob);
            }).catch((error) => {
              console.error("Error creating File array buffer: " + JSON.stringify(error));
              reject(error);
            });
        });
      }).catch((error) => {
        console.error("Error retrieving File URI: " + JSON.stringify(error));
        reject(error);
      });
    });
  }

  deleteProfilePic(userId, url): Promise<any> {
    return new Promise((resolve) => {
      let fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
      console.log(fileName);
      firebase.storage().ref().child('images/' + userId + '/' + fileName).delete().then(() => {
        resolve();
      }).catch((error) => {
        resolve();
      });
    });
  }

  uploadProfilePic(userId, sourceType): Promise<any> {
    this.profilePicOptions.sourceType = sourceType;
    return new Promise((resolve) => {
      this.camera.getPicture(this.profilePicOptions).then(fileURI => {
        this.loading.show();
        // console.log(fileURI);
        let fileName = JSON.stringify(fileURI).substr(JSON.stringify(fileURI).lastIndexOf('/') + 1);
        fileName = fileName.substr(0, fileName.length - 1);
        //Add unique datestring to fileName to make all uploaded files unique and not override.
        fileName = this.processFileName(fileName);
        this.uriToBlob(fileURI).then(fileBlob => {
          let metadata = {
            'contentType': fileBlob.type
          };
          firebase.storage().ref().child('images/' + userId + '/' + fileName).put(fileBlob, metadata).then(snapshot => {
            let fileURL = snapshot.metadata.downloadURLs[0];
            this.loading.hide();
            resolve(fileURL);
          }).catch((error) => {
            this.loading.hide();
            this.toast.showWithDuration(this.translate.get('UPLOAD_PICTURE_ERROR'), ToastConfig.duration);
          });
        }).catch((error) => {
          this.loading.hide();
          this.toast.showWithDuration(this.translate.get('UPLOAD_PICTURE_ERROR'), ToastConfig.duration);
        });
      }).catch((error) => {
        this.loading.hide();
      });
    });
  }

  uploadEventPic(userId, sourceType): Promise<any> {
    this.eventPicOptions.sourceType = sourceType;
    return new Promise((resolve) => {
      this.camera.getPicture(this.eventPicOptions).then(fileURI => {
        this.loading.show();
        // console.log(fileURI);
        let fileName = JSON.stringify(fileURI).substr(JSON.stringify(fileURI).lastIndexOf('/') + 1);
        fileName = fileName.substr(0, fileName.length - 1);
        //Add unique datestring to fileName to make all uploaded files unique and not override.
        fileName = this.processFileName(fileName);
        this.uriToBlob(fileURI).then(fileBlob => {
          let metadata = {
            'contentType': fileBlob.type
          };
          firebase.storage().ref().child('images/' + userId + '/' + fileName).put(fileBlob, metadata).then(snapshot => {
            let fileURL = snapshot.metadata.downloadURLs[0];
            this.loading.hide();
            resolve(fileURL);
          }).catch((error) => {
            this.loading.hide();
            this.toast.showWithDuration(this.translate.get('UPLOAD_PICTURE_ERROR'), ToastConfig.duration);
          });
        }).catch((error) => {
          this.loading.hide();
          this.toast.showWithDuration(this.translate.get('UPLOAD_PICTURE_ERROR'), ToastConfig.duration);
        });
      }).catch((error) => {
        this.loading.hide();
      });
    });
  }

  //Add unique datestring to fileName to make all uploaded files unique and not override.
  private processFileName(fileName: string): string {
    let name = fileName.substr(0, fileName.lastIndexOf('.')) + "_" + Date.now();
    let extension = fileName.substr(fileName.lastIndexOf('.'), fileName.length);
    return name + "" + extension;
  }
}
