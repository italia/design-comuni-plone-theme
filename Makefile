.PHONY: build

PATH := .:$(PATH)

build:
	RAZZLE_API_PATH=http://www.stradanove.it/api yarn build

build-aida:
	RAZZLE_API_PATH=http://italia.aida.redturtle.it/api yarn build

restart:
	pm2 restart italia-volto
