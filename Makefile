.PHONY: build

PATH := .:$(PATH)

build:
	yarn build

restart:
	pm2 restart italia-volto

restart-comune:
	pm2 restart io-comune-volto
