# usage_server

### NOTE: This is extremely outdated, the Heroku server stopped existing several years ago. Please see https://github.com/Stu-Gotz/smog_usage_stats for the updated version.

## Purpose

This is to host showdown data from Smogon.com. I am not sponsored, or affiliated with Smogon in any official capacity, except for being a user and like Pokemon. This is not an official Smogon product or anything, chaos please don't sue me. Data is available all the way back to 2014, and should be kept up to date, hopefully no less than the 5th of every month. I haven't set up a chronjob or anything to keep it updating, but that is my next step.

## Using it

`https://usage-server.herokuapp.com/data/:date/:tier`

`date` must be in the following format: `YYYY-MM`, example: `2019-08` for August 2015. Data does not exist before November 2014.

`tier` must look like it does in Showdown, so for 7th Generation OU, you would enter `gen7ou`. 

for example: `https://usage-server.herokuapp.com/data/2018-08/gen7ou`.


If anyone has any comments on my code, I am open to criticism. This is my first attempt at developing an API, because the one I was previously relying on went down. It's relatively simple, and certainly not cleaned up to professional standards, but it works.

Any or all of this can be re-used, because each day proves more and more that Richard Stallman was right. 

Stack used: Node Js, Express, PostgreSQL. 

Landing page will look prettier in the future, but it's not a priority.
