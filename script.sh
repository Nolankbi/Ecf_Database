#!/bin/bash

function singleInput() {
  unset returnValue
  local shell=$(ps -o comm= -p $$)
  local userInput
  if [[ $shell == "zsh" ]]
  then
    read -k 1 userInput"?$1"
  else
    read -n 1 -p "$1" userInput
  fi
  returnValue=$userInput
}

singleInput "Install docker [y/N] ?"
if [[ $returnValue =~ ^[Yy]$ ]]
then
  sudo apt-get update
  sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

  curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

  echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

  sudo apt-get update
  sudo apt-get install docker-ce docker-ce-cli containerd.io

  sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  sudo chmod +x /usr/local/bin/docker-compose

  sudo groupadd docker
  sudo usermod -aG docker $USER
  newgrp docker 
else
  echo "Continue to next step"
fi

singleInput "Install dependencies [y/N] ?"
if [[ $returnValue =~ ^[Yy]$ ]]
then
  sudo apt-get install build-essential
else
  echo "Continue to next step"
fi

singleInput "Init the project [y/N] ?"
if [[ $returnValue =~ ^[Yy]$ ]]
then
  make init
else
  echo "Continue to next step"
fi

singleInput "Start the project [y/N] ?"
if [[ $returnValue =~ ^[Yy]$ ]]
then
  make start
else
  echo "Continue to next step"
fi