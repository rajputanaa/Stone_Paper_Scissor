# Commit Strategy for Building Streak

## Phase 1: Foundation Setup (Day 1)
```bash
git add README.md .gitignore
git commit -m "docs: Add README and gitignore"
```

## Phase 2: HTML Structure (Day 2)
```bash
git add index.html
git commit -m "feat: Add HTML structure for Rock Paper Scissors game"
```

## Phase 3: Styling (Day 3)
```bash
git add style.css
git commit -m "style: Add CSS styling and layout"
```

## Phase 4: Game Logic (Day 4)
```bash
git add app.js
git commit -m "feat: Add game logic and computer choice algorithm"
```

## Phase 5: Bug Fixes & Polish (Day 5)
```bash
git add .
git commit -m "fix: Minor bug fixes and UI improvements"
```

---

## How to Make These Commits:

1. **Stage files**
   ```bash
   git add README.md .gitignore
   ```

2. **Commit with message**
   ```bash
   git commit -m "docs: Add README and gitignore"
   ```

3. **Check status**
   ```bash
   git status
   ```

4. **View commits**
   ```bash
   git log --oneline
   ```

---

## GitHub Setup Instructions:

1. Create a new repository on GitHub (https://github.com/new)
   - Repository name: `Stone_paper_Scissor` or `rock-paper-scissors`
   - Description: "A classic Rock Paper Scissors game built with HTML, CSS, and JavaScript"
   - Add MIT License
   - Don't initialize with README (you already have one)

2. Connect your local repo to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Stone_paper_Scissor.git
   git branch -M main
   git push -u origin main
   ```

3. For incremental pushes (one per day for streak):
   ```bash
   git push origin main
   ```

---

## Commit Message Format (Professional):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Styling changes
- `refactor:` - Code restructuring
- `test:` - Tests
- `chore:` - Maintenance

Example: `feat: Add score tracking functionality`

---

## Tips for Building Streak:

✅ Make 1 meaningful commit per day
✅ Use clear, descriptive commit messages
✅ Each commit should be a logical unit of work
✅ Push to GitHub every day (at the same time for consistency)
✅ Create meaningful commit messages that describe what was done

---

## Future Enhancements Commits:

Day 6+: You can add features like:
- `feat: Add sound effects`
- `feat: Implement localStorage for score persistence`
- `feat: Add difficulty levels`
- `feat: Add animations`
- `docs: Update README with new features`

This will keep your streak going! 🔥
