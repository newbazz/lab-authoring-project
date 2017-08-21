#!/bin/bash
count=1;
for i in *.png; do
	mv $i $count.png
	count=count+1
done
