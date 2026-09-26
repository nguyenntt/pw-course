### Giải thích câu lệnh: 

#### 1. git commit --amend

`git commit --amend` sửa lệnh commit gần nhất mà không add commit mới

Ex:

`git add file1`

`git commit -m "commit 1"`

Sau đó 

`git add file2`

`git commit --amend`

=> Git sẽ sửa commit 1 hiện tại, commit 1 add 2 file: file1, file2

Nếu không dùng `git commit --amend` ta sẽ có 2 commit: commit 1 add file1, commit 2 add file2

#### 2. Git commit --amend -m" < message > "
Git commit --amend -m" < message > " chỉnh sửa message của commit gần nhất

Ex:

`git commit -m"lesson-02"`

-> `git commit --amend -m"lesson -03"`
-> sữa message of commit từ lesson-02 thành lesson-03

#### 3. Git restore --staged < file >
git restore --staged < file >
Đưa file từ **Staging** về vùng **Working Directory** 

#### 4. Git reset HEAD~1
git reset HEAD~1
Đưa file từ **Repository** về vùng **Working Directory**
