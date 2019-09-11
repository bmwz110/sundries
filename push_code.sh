echo "push lcoal branch $1 to remote branch $1 ..."

git checkout $1
git merge "l_" + $1
git push origin $1:$1