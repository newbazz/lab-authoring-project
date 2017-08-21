#!/bin/bash
count=1;
name=70;
while [[ $name -le 246 ]]; do
	if [ -e $name.png ]
	then
		mv $name.png $count.png
		(( count++ ))
		(( name++ ))
	else
		(( name++))
	fi
done
