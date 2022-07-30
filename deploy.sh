// && 可以做判断 一个失败就不执行了
rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M main &&
git remote add origin git@github.com:lanmoxia/bugu-ui-site.git &&
git push -f -u origin main &&
cd ..
echo https://lanmoxia.github.io/bugu-ui-site/index.html

