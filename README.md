# Google Script for rename folder in Google Drive

## This code also can be use to rename the files in the directory of Google Drive
<br>

### Current Version only able to remove "[ ]" from the name of the folder.
### You can modify the code to follow your requirements.

<br>
<br>

### How to use the code:

1. Open your Google Drive that contains the folder that you want to rename.
2. Click New and create the spreadsheet.
3. Navigate to Tools -> Script Editor</br><br>
![Screenshot_3](https://user-images.githubusercontent.com/13710927/99679695-3286aa00-2ab7-11eb-928d-29359a4b63e2.png) <br>
4. Copy the the code in **"Gdriverenamefolder.js"** from this repo and replace the code in *code .gs*
5. Click the play button to run the code.<br><br>
![Screenshot_4](https://user-images.githubusercontent.com/13710927/99679752-43372000-2ab7-11eb-9096-77f1750e7992.png)


<br><br><br>

### To understand the code:
i) To get the directory first:

> The code Below is about to get folder by name. you must understand your directory first. If you want to rename all the folder in the lowest subdirectory, it should be the same as example below:<br>
eg: ->Works<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-> Programming<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-> Javascript

> Your code should look like this:

~~~sh
var rootFolder = DriveApp.getFoldersByName("Works").next();
var subfolder1 = rootFolder.getFoldersByName("Programming").next();
var subfolder2 = subfolder1.getFoldersByName("Javascript").next();
~~~

ii) To get all the name that need to rename:
> As you can see the code below, we loop to get all the name of the folder.
~~~sh
var Folder = subfolder2.getFolders();
while(Folder.hasNext()) {
    var folder = Folder.next();
    var oldName = folder.getName();
}
~~~


iii) Find the value you the first characters that you want to remove. After that, remove it.
> For this example, I want to remove **"[test]"** from the name of the folder. If the name contains *"["* in the string, it will remove all the *"[]"* in the name the folder.
~~~sh
if (oldName.indexOf('[') > -1) {
      // this is regex to remove brackets only      
      str = oldName.replace(/ *\[[^\]]*]/g, '');
      Logger.log(str);
      folder.setName(str);
    }
~~~

<br>

**You can set this script as cronjob/scheduler to run daily or every minute. You can search cronjob google apps script.**



