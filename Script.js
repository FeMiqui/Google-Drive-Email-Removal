function Revoke_thePersons_Rights() {
 const folders = DriveApp.getFolders();
 /*or Files:  const files = DriveApp.getFiles();*/
 var i = 0;
 while (folders.hasNext()){ /*iterating through the docs/folders/files*/
   var folder = folders.next(); 
     for (i=0;i< folder.getEditors().length; i++){ /*Has to check if the editor is there, otherwise it might scan a file where he isn't there and throw an error*/
       if (folder.getEditors()[i].getEmail() == 'person@email.com'){folder.removeEditor('person@email.com');}
     }
  }
}
