;; Clicker - on-chain tap game
;; Each user can tap unlimited times, all taps recorded on-chain

;; Global total clicks
(define-data-var total-clicks uint u0)

;; Per-user click count
(define-map user-clicks principal uint)

;; Top 10 leaderboard storage
(define-data-var leader-1 {who: principal, clicks: uint} {who: tx-sender, clicks: u0})
(define-data-var leader-2 {who: principal, clicks: uint} {who: tx-sender, clicks: u0})
(define-data-var leader-3 {who: principal, clicks: uint} {who: tx-sender, clicks: u0})
(define-data-var leader-4 {who: principal, clicks: uint} {who: tx-sender, clicks: u0})
(define-data-var leader-5 {who: principal, clicks: uint} {who: tx-sender, clicks: u0})
(define-data-var leader-6 {who: principal, clicks: uint} {who: tx-sender, clicks: u0})
(define-data-var leader-7 {who: principal, clicks: uint} {who: tx-sender, clicks: u0})
(define-data-var leader-8 {who: principal, clicks: uint} {who: tx-sender, clicks: u0})
(define-data-var leader-9 {who: principal, clicks: uint} {who: tx-sender, clicks: u0})
(define-data-var leader-10 {who: principal, clicks: uint} {who: tx-sender, clicks: u0})

;; Main tap function
(define-public (tap)
  (let
    (
      (caller tx-sender)
      (current (default-to u0 (map-get? user-clicks caller)))
      (new-count (+ current u1))
    )
    ;; Update user clicks
    (map-set user-clicks caller new-count)
    ;; Update global counter
    (var-set total-clicks (+ (var-get total-clicks) u1))
    ;; Update leaderboard
    (update-leaderboard caller new-count)
    (ok new-count)
  )
)

;; Leaderboard update - bubble insert
(define-private (update-leaderboard (who principal) (clicks uint))
  (begin
    (if (>= clicks (get clicks (var-get leader-10)))
      (begin
        (var-set leader-10 {who: who, clicks: clicks})
        (bubble-up-9)
      )
      true
    )
    true
  )
)

(define-private (bubble-up-9)
  (if (>= (get clicks (var-get leader-10)) (get clicks (var-get leader-9)))
    (let ((tmp (var-get leader-9)))
      (var-set leader-9 (var-get leader-10))
      (var-set leader-10 tmp)
      (bubble-up-8)
    )
    true
  )
)

(define-private (bubble-up-8)
  (if (>= (get clicks (var-get leader-9)) (get clicks (var-get leader-8)))
    (let ((tmp (var-get leader-8)))
      (var-set leader-8 (var-get leader-9))
      (var-set leader-9 tmp)
      (bubble-up-7)
    )
    true
  )
)

(define-private (bubble-up-7)
  (if (>= (get clicks (var-get leader-8)) (get clicks (var-get leader-7)))
    (let ((tmp (var-get leader-7)))
      (var-set leader-7 (var-get leader-8))
      (var-set leader-8 tmp)
      (bubble-up-6)
    )
    true
  )
)

(define-private (bubble-up-6)
  (if (>= (get clicks (var-get leader-7)) (get clicks (var-get leader-6)))
    (let ((tmp (var-get leader-6)))
      (var-set leader-6 (var-get leader-7))
      (var-set leader-7 tmp)
      (bubble-up-5)
    )
    true
  )
)

(define-private (bubble-up-5)
  (if (>= (get clicks (var-get leader-6)) (get clicks (var-get leader-5)))
    (let ((tmp (var-get leader-5)))
      (var-set leader-5 (var-get leader-6))
      (var-set leader-6 tmp)
      (bubble-up-4)
    )
    true
  )
)

(define-private (bubble-up-4)
  (if (>= (get clicks (var-get leader-5)) (get clicks (var-get leader-4)))
    (let ((tmp (var-get leader-4)))
      (var-set leader-4 (var-get leader-5))
      (var-set leader-5 tmp)
      (bubble-up-3)
    )
    true
  )
)

(define-private (bubble-up-3)
  (if (>= (get clicks (var-get leader-4)) (get clicks (var-get leader-3)))
    (let ((tmp (var-get leader-3)))
      (var-set leader-3 (var-get leader-4))
      (var-set leader-4 tmp)
      (bubble-up-2)
    )
    true
  )
)

(define-private (bubble-up-2)
  (if (>= (get clicks (var-get leader-3)) (get clicks (var-get leader-2)))
    (let ((tmp (var-get leader-2)))
      (var-set leader-2 (var-get leader-3))
      (var-set leader-3 tmp)
      (bubble-up-1)
    )
    true
  )
)

(define-private (bubble-up-1)
  (if (>= (get clicks (var-get leader-2)) (get clicks (var-get leader-1)))
    (let ((tmp (var-get leader-1)))
      (var-set leader-1 (var-get leader-2))
      (var-set leader-2 tmp)
      true
    )
    true
  )
)

;; Read-only functions

(define-read-only (get-total-clicks)
  (var-get total-clicks)
)

(define-read-only (get-user-clicks (user principal))
  (default-to u0 (map-get? user-clicks user))
)

(define-read-only (get-leaderboard)
  (list
    (var-get leader-1)
    (var-get leader-2)
    (var-get leader-3)
    (var-get leader-4)
    (var-get leader-5)
    (var-get leader-6)
    (var-get leader-7)
    (var-get leader-8)
    (var-get leader-9)
    (var-get leader-10)
  )
)
