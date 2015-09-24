# Heathcare Death Clock
Death clock for Medicaid Expansion.

## Notes for Patrick on JS injection into meta OG tag and social share links

See lines 60, 127, and 128 of the index.html page.

The idea would be to sub out where it says "1184" and "649" in any and all of those three lines. Line 60 is just a normal HTML meta tag. Lines 127 and 128 are URLs that have been encoded so it might not be possible.

Of course, the other issue would be that the Facebook share image for the page is static, but we could just remove any hard number references for that so it's never out of date.