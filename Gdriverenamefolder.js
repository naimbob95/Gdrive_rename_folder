function renameFiles(){
 var rootFolder = DriveApp.getFoldersByName("Main Folder").next();
 var mainFolder = rootFolder.getFoldersByName("subfolder").next();
 var Folder = mainFolder.getFolders();
  while(Folder.hasNext()) {
    var folder = Folder.next();
    var oldName = folder.getName();
    if (oldName.indexOf('[') > -1) {
      // this is regex to remove brackets only      
      str = oldName.replace(/ *\[[^\]]*]/g, '');
      Logger.log(str);
      folder.setName(str);
    }
  }
}