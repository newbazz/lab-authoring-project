#!/bin/bash
for i in *.svg; do
	filename=$(basename "$i")
	extension="${i##*.}"
	filename="${i%.*}"
	rsvg-convert -o $filename.png $i
	rm $i
done

