## FusionAuth Kickstart Examples

This project provides a number of example Kickstart files (and any supporting files they need). To learn more about Kickstart, you can review the [Kickstart Documentation page](https://fusionauth.io/docs/v1/tech/installation-guide/kickstart).

This project is divided into 2 sections:

* Community provided Kickstarts
* FusionAuth provided Kickstarts

If you would like to submit a community Kickstart, open a Pull Request on this project.

Each Kickstart has its own directory which contains the main `kickstart.json` file. This file is used by FusionAuth when it starts up and is specified using a configuration option. This can be an environmental variable, configuration property specified in the configuration file, or a command-line parameter passed to the Java virtual machine.

### Kickstart Examples

Here's a brief overview of the Kickstart examples in the `fusionauth` subdirectory.

*api-key-only*

This is the base case of Kickstart that will set an API key and then you can complete your setup using your own application to make API requests.

*development*

This kickstart is used by FusionAuth in development to bypass the setup wizard and create a few example users and configurations.

*kitchen-sink*

Shows an example of a bit of everything, including environment variables, UUID generation, including JSON files and text files and changing the default tenantId.

*multiple-tenants*

Demonstrates adding multiple tenants.

*docs-and-blog*

This directory contains kickstart files corresponding to example applications and blog posts. 

See https://fusionauth.io/docs/extend/examples/ and https://fusionauth.io/blog/ for some of these examples.
