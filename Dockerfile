FROM mf/nodebox:latest

MAINTAINER reharik@gmail.com

ENV PLUGIN_HOME /app/current

RUN mkdir -p $PLUGIN_HOME


ADD ./package.json ../$PLUGIN_HOME/package.json
WORKDIR ../

RUN pwd
RUN npm-install-missing

WORKDIR $PLUGIN_HOME

ADD . $PLUGIN_HOME
