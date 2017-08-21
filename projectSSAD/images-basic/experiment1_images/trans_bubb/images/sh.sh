#!/bin/bash
for i in *.png; do
	mv $i %03d.png
	rm $i
done


