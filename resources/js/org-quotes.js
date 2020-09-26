var r_text = [
    "I honestly don't know how I ever lived without org-mode  -- Luke Gaudreau on Twitter.",
    "Org-mode is one of those tools that change the way you work and think forever.  -- Kaluza Twitter",
    "PT>   Damn! Org is again a step ahead of me. :D Nick> Yup - get used to it ,-)  -- PT and Nick Dokos on emacs-orgmode.",
    "Org-mode has changed my life!  -- Jonathan E. Magen in a blog post",
    "If humans could mate with software, I'd have org-mode's babies.  -- Chris League on Twitter.",
    "If I hated everything about Emacs, I would still use it for org-mode. [...]  -- Avdi on Twitter",
    "Org-mode is like half the awesomeness of emacs  -- Pavel on Twitter",
    "Org-mode is so awesome because everything is ultimately still plain text files.  -- Philip J. Hollenback on Twitter",
    "If Emacs is an operating system, Org-mode is the office/productivity suite.  -- Eric Schulte in his screenshot on Worg",
    "Org-mode seemed like a way to tame the text file beast and ride it off into the sunset.  -- Joey Doll in a blog post",
    "Org-mode is a note taking tool unparalleled in it's simplicity and ease of use.  -- Shrutarshi Basu in a blog post",
    "Org-mode is like doubling the RAM in your brain.  -- Casey Brant on  Twitter",
    "Org-mode, gestalt of The One True Editor.  Sentience is close at hand.  -- Richard Hoskins on Twitter",
    "Emacs org-mode makes my geek heart flutter. [...]  -- Sacha Chua on Twitter",
    "Little by little org-mode will take over my life.   -- Mehul Sanghvi",
    "The best thing that happened to Emacs since Emacs itself: Org Mode.  -- Tomas S. Grigera on twitter",
    "Every time I go to use Org-mode, I find something new and helpful.  -- Katherine Cox on Google+"]
document.addEventListener("DOMContentLoaded", () => {if (document.getElementById("a-quote")) {
    document.getElementById("a-quote").innerHTML = r_text[Math.floor((1 + r_text.length)*Math.random())].replace("--", "—");
}})
