#!/bin/bash
#
# This script runs in the buildspec before testing

cat example_inputs/inputs_1_create.json| sed "s/GROUP_ID/${GROUP_ID}/g"| sed "s/APPLICATION_ID/${APPLICATION_ID}/g" > inputs/inputs_1_create.json
cat test/integ.yml| sed "s/GROUP_ID/${GROUP_ID}/g"| sed "s/APPLICATION_ID/${APPLICATION_ID}/g" > test/integ-unique.yml
python ../get_type_configuration.py


