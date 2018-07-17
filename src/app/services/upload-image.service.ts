  import { Injectable } from '@angular/core';
  import {AppConst} from '../const/app-const';


  @Injectable()
  export class UploadImageService {
  private serverPath : string =AppConst.serverPath;
   filesToUpload: Array<File>;

   file1:File;
   file2:File;
   
    constructor() {
    this.filesToUpload=[]; 
    }

  upload(adId:string){
  	
    	this.makeFileRequest("http://localhost:8181/carad/add/image?id="+adId, [], this.filesToUpload).then((result) => {
       this.filesToUpload=[];
    		console.log(result);
    	}, (error) => {
    		console.log(error);
    	});
    }

      fileChangeEvent(fileInput: any) {
      this.file1 = fileInput.target.files[0];
      this.filesToUpload.push(this.file1)
       }

     fileChangeEvent2(fileInput: any) {
      this.file2 = fileInput.target.files[0];
      this.filesToUpload.push(this.file2);
      }

  removeImage(file: any) {
   let filename:string = file.target.attributes.name.value;
   let  index: number; 
   console.log(filename);
        if(filename =='file1')
           index=this.filesToUpload.indexOf(this.file1)
           else
           {
            console.log('look for index '+this.file2);
            index=this.filesToUpload.indexOf(this.file2)
           }
      if (index !== -1) {
         this.filesToUpload.splice(index, 1);

      } 
  }



      makeFileRequest(url:string, params:Array<string>, files:Array<File>) {
    	return new Promise((resolve, reject) => {
    		var formData:any = new FormData();
    		console.log(files);
        var xhr = new XMLHttpRequest();
    		for(var i=0; i<files.length;i++) {
        console.log('Sending data '+files[i].name)
    			formData.append("uploads[]", files[i], files[i].name);
    		console.log('formData '+formData)
        }
    		xhr.onreadystatechange = function() {
    			if(xhr.readyState == 4) {
    				if(xhr.status==200) {
    					console.log("image uploaded successfully!");
    				} else {
    					reject(xhr.response);
    				}
    			}
    		}

    		xhr.open("POST", url, true);
    		xhr.setRequestHeader("x-auth-token", localStorage.getItem("xAuthToken"));
    		xhr.send(formData);
    	});
    }

  }


