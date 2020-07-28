## one. update /etc/hosts

1. Open the Terminal. It’s located at /Applications/Utilities/Terminal.app

2. Enter the following command:
`sudo nano /private/etc/hosts`

3. This command is using nano, the built-in command line editor to open the Hosts file. You will be asked for your password because root privileges are needed to edit the Hosts.

4. You will now see the contents of the Hosts file. It has one entry per line, with the hostname followed by the IP address. Hashed lines (#) are comment lines and are ignored by the system. Use the arrow keys to move the cursor.

5. Append your entries to the end of the file. Use tab key or spaces to separate the IP from domains. Like so:
`0.0.0.0 account.jetbrains.com`

6. Check you entries, and Save the file by pressing Control + O keys. (letter O, not zero) It will ask where to write, with the Hosts file already typed, press Enter to write.

7. Control + X to close nano editor.

8. Now for your new entry to take effect, the DNS cache needs to be flushed.

  > OS X 10.5 or later use this command:
  `dscacheutil -flushcache`

  > OS X 10.4 or earlier use:
  `lookupd -flushcache`
  
  ## two. download active code
  
  [download ative code](http://idea.medeming.com/jets/)
  
  
  ## three. Download JetbrainsCrack-3.1-release-enc.jar
  1. open Application, find Webstorm icon
  2. right click Webstorm icon --> show package contents
  3. find contents/bin folder and copy the .jar file into this path
