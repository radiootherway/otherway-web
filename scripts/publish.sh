#!/usr/bin/env bash

docker build -t fergalmoran/otherway-web .
docker push fergalmoran/otherway-web

update_docker.sh
