#!/bin/bash
#Version 1.0

CA_FILE_URL="http://webarchive.betconstruct.int/betconstruct.int.ca.crt"
test `whoami` != root && echo "Run the script with sudo or root user" && exit 2
test -f /etc/debian_version && OS_RELEASE=debian

if [ $OS_RELEASE == "debian" ]
	then	mkdir /usr/local/share/ca-certificates/betconstruct
		cd /usr/local/share/ca-certificates/betconstruct
		wget $CA_FILE_URL
		update-ca-certificates
	else	echo "Your OS not supported"
fi
