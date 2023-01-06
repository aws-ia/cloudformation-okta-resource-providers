#!/bin/bash
#
# Set up any prerequisites needed for cfn test
#
# Currently we are setting up the user and group by hand.
# If we create them here, we will have to also make changes
# to the input files, since we can't use stack export values.
#

cat example_inputs/inputs_1_create.json | sed "s/GROUP_ID/${GROUP_ID}/g" | sed "s/USER_ID/${USER_ID}/g" > inputs/inputs_1_create.json
cat example_inputs/inputs_1_update.json  | sed "s/GROUP_ID/${GROUP_ID}/g" | sed "s/USER_ID/${USER_ID}/g" > inputs/inputs_1_update.json
cat test/integ-template.yml | sed "s/GROUP_ID/${GROUP_ID}/g" | sed "s/USER_ID/${USER_ID}/g" > test/integ.yml

