# Warthog

This is a React GUI interacting with a Laravel API, a real-world example SPA with the following features:

- ACL (access control list)
- JWT authentication
- CRUD implementation
- REST API
- Redux
- Data-driven tests
- Docker setup

---

### Set up the Environment

Create an `.env` file:

    cp .env.example .env

Bootstrap the development environment:

    bash/dev/start.sh

[Click here](https://github.com/programarivm/warthog/blob/master/bash/dev/start.sh) for further details on the `start.sh` script.

### Local Set up

Finally, don't forget to add the following entry to your `/etc/hosts` file:

    172.21.0.1      warthog.local

To find out the IP of the `warthog_nginx` container:

    echo $(docker inspect -f '{{range .NetworkSettings.Networks}}{{.Gateway}}{{end}}' warthog_nginx)

The app can now run on your favourite web browser by typing https://warthog.local into the address bar.

### Run the Tests

    docker exec -it --user 1000:1000 warthog_php_fpm ./vendor/bin/phpunit

### Screenshots

<p align="center">
    <img src="https://github.com/programarivm/warthog/blob/master/resources/images/Figure-01.png" />
</p>

<p align="center">
    <b>Figure 1</b>. John reviewing a restaurant
</p>

<p align="center">
    <img src="https://github.com/programarivm/warthog/blob/master/resources/images/Figure-02.png" />
</p>

<p align="center">
    <b>Figure 2</b>. Bob adding a user
</p>

### Contributions

Would you help make this app better?

- Feel free to send a pull request
- Drop an email at info@programarivm.com with the subject "Warthog"
- Leave me a comment on [Twitter](https://twitter.com/programarivm)

Thank you.
