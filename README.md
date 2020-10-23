# Warthog

This is a React app with Redux interacting with a Laravel API in a LEMP stack, a real-world full-stack example SPA.

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

    $ cp .env.example .env

Bootstrap the development environment:

    $ bash/dev/start.sh

### Local Set up

To find out the IP of your `warthog_nginx` container:

    $ echo $(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' warthog_nginx)

Then add the IP to your `/etc/hosts` file:

    172.21.0.1      warthog.local

Open your favourite web browser and type `https://warthog.local` into the address bar.

### Run the Tests

    $ docker exec -it --user 1000:1000 warthog_php_fpm ./vendor/bin/phpunit

### Screenshots

<p align="center">
    <img src="https://github.com/programarivm/warthog/blob/master/resources/images/Figure-01.png" />
</p>

<p align="center">
    <b>Figure 1</b>. Homepage
</p>

<p align="center">
    <img src="https://github.com/programarivm/warthog/blob/master/resources/images/Figure-02.png" />
</p>

<p align="center">
    <b>Figure 2</b>. Login page
</p>

<p align="center">
    <img src="https://github.com/programarivm/warthog/blob/master/resources/images/Figure-03.png" />
</p>

<p align="center">
    <b>Figure 3</b>. Reviews page
</p>

<p align="center">
    <img src="https://github.com/programarivm/warthog/blob/master/resources/images/Figure-04.png" />
</p>

<p align="center">
    <b>Figure 4</b>. Bob adding a restaurant
</p>

### Contributions

Would you help make this app better?

- Feel free to send a pull request
- Drop an email at info@programarivm.com with the subject "Warthog"
- Leave me a comment on [Twitter](https://twitter.com/programarivm)

Thank you.
