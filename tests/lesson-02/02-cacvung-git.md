# Cac Vung Git

| Bước  | Lệnh                           | Working Directory     | Staging Area | Repository        |
| ----- | ------------------------------ | --------------------- | ------------ | ----------------- |
| **a** | Tạo file1, file2, file3        | `file1, file2, file3` | —            | —                 |
| **b** | git init                     | `file1, file2, file3` | —            | Chưa có commit    |
| **c** | git commit -m "init project" | `file1, file2, file3` | —            | **Chưa có gì**    |
| **d** | git add file1                | `file2, file3`        | `file1`      | Chưa có commit    |
| **e** | git commit -m "add file1"    | `file2, file3`        | —            | `file1`           |
| **f** | git commit -m "add file"     | `file2, file3`        | —            | `file1`           |
