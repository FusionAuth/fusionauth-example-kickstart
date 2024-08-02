## FusionAuth Kickstart Examples

See [Kickstart Documentation](https://fusionauth.io/docs/v1/tech/installation-guide/kickstart) for additional help.


```
|- contrib/
|- example-apps/
|- fusionauth/
|  |- emails/
|  |  |- *
|  |- json/
|  |  |- *
|  |- requests/
|  |  |- *
|  |- kickstart-api-key-only.json
|  |- kickstart-development.json
|  |- kickstart-kitchen-sink.json
|  |- kickstart-multipleTenants.json
|  |- kickstart-quickstart.json
```

### Kickstart Examples

*kickstart-api-key-only.json*

This is the base case of Kickstart that will set an API key and then you can complete your setup using your own application to make API requests.

*kickstart-development.json*

This kickstart is used by FusionAuth in development to bypass the setup wizard and create a few example users and configurations.

*kickstart-kitchen-sink.json*

Shows an example of a bit of everything, including environment variables, UUID generation, including JSON files and text files and changing the default tenantId.

*kickstart-multiple-tenants.json*

Demonstrates adding multiple tenants.

*kickstart-quickstart.json*

Used in example guides to bypass the setup wizard and quickly spin up a FusionAuth instance with an API key, application configuration, admin and sample user.

### Example Apps

This directory contains kickstart files corresponding to example applications. 

You can view the full list of example applications available for FusionAuth here: https://fusionauth.io/docs/v1/tech/example-apps/
