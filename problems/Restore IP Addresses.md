
Một **địa chỉ IP hợp lệ** bao gồm chính xác bốn số nguyên được phân cách bởi dấu chấm. Mỗi số nguyên phải nằm trong khoảng từ `0` đến `255` (**bao gồm cả 0 và 255**) và **không được có số 0 đứng đầu** (trừ khi chỉ là số 0).

* Ví dụ: `"0.1.2.201"` và `"192.168.1.1"` là các địa chỉ IP **hợp lệ**, nhưng `"0.011.255.245"`, `"192.168.1.312"` và `"192.168@1.1"` là các địa chỉ IP **không hợp lệ**.

---

Cho một chuỗi `s` chỉ bao gồm các chữ số, hãy trả về **tất cả các địa chỉ IP hợp lệ có thể được tạo ra bằng cách chèn dấu chấm vào chuỗi `s`**.
**Không được phép thay đổi thứ tự hoặc xóa bất kỳ chữ số nào trong chuỗi `s`**.
Bạn có thể trả về các địa chỉ IP hợp lệ theo **bất kỳ thứ tự nào**.

---

### Ví dụ 1:

**Input:**

```text
25525511135
```

**Output:**

```text
255.255.11.135 
255.255.111.35
```

---

### Ví dụ 2:

**Input:**

```text
0000
```

**Output:**

```text
0.0.0.0
```

---

### Ví dụ 3:

**Input:**

```text
101023
```

**Output:**

```text
1.0.10.23
1.0.102.3
10.1.0.23
10.10.2.3
101.0.2.3
```

---

### Ràng buộc:

* `1 <= s.length <= 20`
* `s` chỉ bao gồm các chữ số.

