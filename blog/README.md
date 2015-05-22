Orion Example Blog
==================

## Demo of Opps issue
Please see [issue #162 orionjs/orion Pages Opps message flashing up](https://github.com/orionjs/orion/issues/162) for more information.

When meteor routes to any create pages url a brief "Oops" message flashes up. This may be reproduced as follows:
  
1. create an admin account
2. in the Admin panel go to "Pages"
3. create a contact page as follows

        title: "Contact"
        url: "contact"
        Contents: "This is the contact page!"  
4. go to the [Home page](http://localhost:3000)
5. click on [Contact](http://localhost:3000/contact) in the silly menu
6. as the page loads you should see the *"Oops"* message flash up!


``` v2.0 ```

http://orion-example.meteor.com

**Learn how to use orion with this example.**

Orion is a simple and useful cms for meteor. 
Creates automatically a admin panel for your 
collections and gives you the ability to have
key/value definitions for your site.

## Installing

This example uses AWS S3 to save the files.
Read the instructions on how to setup the S3 [here](https://github.com/orionjs/orion/tree/master/packages/s3).


## Updates

Any change that has orion will be reflected here, always up to date.
*See the commit history*.


## Content

This example covers the following points:

- How to create entities and the dictionary
- How to use the file attribute
- How to use froala editor
- How to use languages in the dictionary
- Using iron router with orion
- Subscribing to the entities
- Allow users registration
- Orion Permissions
- Orion pages package

## Orion Packages

Below is a list of `Orion Packages` used to build this blog example.

- [orionjs:bootstrap](https://github.com/orionjs/orion/tree/master/packages/bootstrap)
- [orionjs:file-attribute](https://github.com/orionjs/orion/tree/master/packages/file-attribute)
- [orionjs:froala-editor](https://github.com/orionjs/orion/tree/master/packages/froala)
- [orionjs:filesystem](https://github.com/orionjs/orion/tree/master/packages/filesystem)
- [orionjs:s3](https://github.com/orionjs/orion/tree/master/packages/s3)
- [orionjs:pages](https://github.com/orionjs/orion/tree/master/packages/pages)
