# Noorani site — how to edit and deploy

1. **Source lives here:** `C:\Users\11 TRDs\Documents\noorani-site\` (canonical local repo, never use Temp).
2. **Edit:** open the `.html` file you want to change in any editor, save in place, and check `git status`.
3. **Commit:** `git add -A && git commit -m "Describe the change"` — always commit before deploying.
4. **Deploy:** `scp -P 65002 -i ~/.ssh/hostinger_kpi <changed-files>.html u606150776@93.127.220.190:~/domains/nooranibrowser.com/public_html/`
5. **Verify:** `curl -s -o /dev/null -w "%{http_code}\n" https://nooranibrowser.com/<path>` should return 200.
