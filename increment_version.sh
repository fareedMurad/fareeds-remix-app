#!/usr/bin/env bash
new_version=`awk 'NR==1 {newver = $1 + 1} END {print newver}' version.txt`
echo New Version: $new_version
echo $new_version > version.txt