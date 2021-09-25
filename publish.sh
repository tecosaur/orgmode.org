#!/usr/bin/env sh

":"; exec emacs --quick --script "$0" -- "$@" # -*- mode: emacs-lisp; lexical-binding: t; -*-

(require 'ox-html)
(load "/usr/share/emacs/site-lisp/elpa-src/htmlize-1.55/htmlize.el")

(setq make-backup-files nil
      debug-on-error t)

(setq org-confirm-babel-evaluate nil
      org-html-style-default ""
      org-html-scripts ""
      org-html-htmlize-output-type 'css
      org-html-doctype "html5"
      org-html-html5-fancy t
      org-html-validation-link nil
      org-html-postamble t
      org-html-postamble-format
       `(("en" ,(with-temp-buffer
		  (insert-file-contents-literally "./resources/postamble.html")
		  (buffer-substring-no-properties (point-min) (point-max))))))

(dolist (org-file (directory-files-recursively default-directory "\\.org$"))
  (let ((html-file (concat (file-name-directory org-file)
			   (file-name-base org-file) ".html")))
    (if (and (file-exists-p html-file)
             (file-newer-than-file-p html-file org-file))
	(message " [skipping] unchanged %s" org-file)
      (message "[exporting] %s" (file-relative-name org-file default-directory))
      (with-current-buffer (find-file org-file)
	(condition-case err
            (org-html-export-to-html)
          (error (message (error-message-string err))))))))
