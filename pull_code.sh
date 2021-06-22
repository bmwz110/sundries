echo "pull origin branch $1 to lcoal branch $1 ..."

git pull origin $1:$1
git rebase $1


