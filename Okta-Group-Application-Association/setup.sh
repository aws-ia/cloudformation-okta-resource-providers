#!/bin/bash
#
# This script runs in the buildspec before testing

mkdir -p inputs

cat example_inputs/inputs_1_create.json| sed "s/GROUP_ID/${GROUP_ID}/g"| sed "s/APPLICATION_ID/${APPLICATION_ID}/g" > inputs/inputs_1_create.json
cat test/integ-template.yml| sed "s/GROUP_ID/${GROUP_ID}/g"| sed "s/APPLICATION_ID/${APPLICATION_ID}/g" > test/integ.yml
python ../get_type_configuration.py


