#/bin/bash
git checkout example-sockets && \
git rebase master && \
git push -f && \
git checkout master
