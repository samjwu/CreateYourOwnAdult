.PHONY: build dev chapter1

build:
	tweego -o index.html res

dev:
	tweego -w -o index.html res