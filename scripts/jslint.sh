find ./src -name "*.js" -print0  | xargs -0 jslint
find ./test -name "*.js" -print0 | xargs -0 jslint --white