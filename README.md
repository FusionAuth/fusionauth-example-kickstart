## FusionAuth Kickstart Examples

This project provides a number of example Kickstart files (and any supporting files they need). To learn more about Kickstart, you can review the [Kickstart Documentation page](https://fusionauth.io/docs/v1/tech/installation-guide/kickstart).

If you would like to submit a Kickstart, head on over to our contrib repository here: https://github.com/fusionauth/fusionauth-contrib

Each Kickstart has its own directory which contains the main `kickstart.json` file. This file is used by FusionAuth when it starts up and is specified using a configuration option. This can be an environmental variable, configuration property specified in the configuration file, or a command-line parameter passed to the Java virtual machine.

### Kickstart Examples

Here's a brief overview of the Kickstart examples in the `fusionauth` subdirectory.

*api-key-only*

This is the base case of Kickstart that will set an API key, and then you can complete your setup using your own application to make API requests.

*basic*

This is the simple Kickstart file that simple creates an admin user `admin@example.com` with the password `password`.

*development*

This kickstart is used by FusionAuth in development to bypass the setup wizard and create a few example users and configurations.

*kitchen-sink*

Shows an example of a bit of everything, including environment variables, UUID generation, including JSON files and text files and changing the default tenantId.

*mailcatcher*

Configures FusionAuth to use the Mailcatcher SMTP service for email.

*multiple-tenants*

Demonstrates adding multiple tenants.

*theme-css-only*

Creates a custom theme that uses CSS to style the FusionAuth OAuth front-end.
