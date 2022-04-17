https://www.nobledesktop.com/learn/git/git-branches

### Delete Branch

`delete branch locally`

git branch -d localBranchName

`delete branch remotely`

git push origin --delete remoteBranchName

### List branch

`To see local branches, run this command:`

git branch

`To see remote branches, run this command:`

git branch -r

`To see all local and remote branches, run this command:`

git branch -a

### Create Branch

git checkout -b hotfix


### Others

`Switch Branch`

git checkout master

git checkout hotfix

`pull request`

git push -u origin my-branch-name

git push -u origin HEAD

`Merge a Branch`

git merge hotfix

git merge prefix-2