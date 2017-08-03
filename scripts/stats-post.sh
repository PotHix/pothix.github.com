#!/bin/sh

YEAR=2017
MONTH_BEFORE=$1
MONTH_AFTER=$2

if [ "$MONTH_BEFORE" == "" ]
then
    echo "Missing month to copy from"
    exit 0
fi

if [ "$MONTH_AFTER" == "" ]
then
    echo "Missing month to copy to"
    exit 0
fi

cp -R static/images/stats/$YEAR/$MONTH_BEFORE static/images/stats/$YEAR/$MONTH_AFTER
cp content/post/stats-$MONTH_BEFORE-$YEAR.md content/post/stats-$MONTH_AFTER-$YEAR.md
