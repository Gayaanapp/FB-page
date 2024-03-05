---
sidebar_position: 1
---

# Findings

1. **Major Integrations missing:**
   - Mutual Connection is not available.
   - Direct connection (monetization) with points not available.
   - Chatting is not available.
   - Payment With cards not available (Tested With random physical devices).
   - WaafiPay cancel and Successful not available.
   - Matching Filter functions not available.
   - Somali Language not available.
   - Push notification not available.

2. **Signup with Email Issues:**
   - Once registered with email, user cannot sign again. After signup, the app does not recognize the email to continue signing with password; instead, it throws an error and wants to register the same email again.
   - Reset password is not available; if the user forgets their password, they can’t reset it.
   - Input validation is not available; you can set a single character as the password.

3. **Signup Profile issue:**
   - Upload photo not functioning; there is a bug.
   - Name validation is missing; it accepts "X" as the name of a person.
   - Date of Birth validation is missing; it accepts DOB like this: 00/00/1998.
   - Device location not set as mandatory; it is not forcing the user to allow. Without this, matching criteria do not work.

4. **Other Issues:**
   - Upload Photo in profile edit not functioning properly; sometimes when you save, the loading never ends until you uninstall the app.
   - The profile view does not show the second photo if the user has uploaded more than one.
   - In the matching screen, when you find available users to like, after finishing all by liking or closing, some of the users are still visible until you restart the app. After liking or closing, the app is not loading the background to remove the finished ones.

