import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface CooperativeDetails {
  id: string;
  name: string;
  description: string; // HTML string for rich text
  images: string[]; // Array of image URLs
  officialUrl: string;
  styles?: { [key: string]: string }; // Optional custom styles
  additionalFields?: any; // For extra data
}

@Injectable({
  providedIn: 'root'
})
export class CooperativeService {

  private cooperatives: CooperativeDetails[] = [
    {
      id: 'maison-alphonse-desjardins',
      name: 'Maison Alphonce-Desjardins – Lévis , Québec, Canada',
      description: `
<section class="Maison Alphonce-Desjardins – Lévis , Québec, Canada">
<h1>&nbsp;</h1>

<h1><a name="_Toc212818708"></a><a name="_Toc212894126">1. Maison
Alphonce-Desjardins – Lévis , Québec, Canada</a> </h1>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif'>Official
website : </span><a
href="https://www.desjardins.com/ca/about-us/desjardins/who-we-are/our-history-museum/visiting-maison-alphonse-desjardins/index.jsp"><span
style='font-family:"Calibri",sans-serif'>https://www.desjardins.com/ca/about-us/desjardins/who-we-are/our-history-museum/visiting-maison-alphonse-desjardins/index.jsp</span></a></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif'>&nbsp;</span></p>

<p class=MsoNormal><img width=333 height=333 src="assets/images/sites_files/image001.jpg"
align=left hspace=12></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif;color:#3E3E3E;
background:white'>Photo: Claude Coté</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif'>Source of
photos and information </span><a
href="https://www.desjardins.com/ca/about-us/desjardins/who-we-are/our-history-museum/visiting-maison-alphonse-desjardins/index.jsp"><span
style='font-family:"Calibri",sans-serif'>https://www.desjardins.com/ca/about-us/desjardins/who-we-are/our-history-museum/visiting-maison-alphonse-desjardins/index.jsp</span></a></p>

<h2><strong><span style='font-family:"Aptos Display",sans-serif;font-weight:
normal'>Preserving the Spirit of Cooperation: The Alphonse Desjardins
Historical Society</span></strong></h2>

<h3><strong><span style='font-weight:normal'>A Legacy of Vision and Community</span></strong></h3>

<p>In 1979, officers of the Desjardins Group took a visionary step to ensure
that the roots of the cooperative movement in North America would never fade
from memory. They founded the <strong><span style='font-weight:normal'>Alphonse
Desjardins Historical Society</span></strong>, an institution dedicated to
preserving and celebrating the remarkable heritage of <strong><span
style='font-weight:normal'>Alphonse and Dorimène Desjardins</span></strong>,
the founders of the first credit union in North America.</p>

<p>The Society’s mission is both simple and profound: <em>“to safeguard and
promote the history and heritage of the Desjardins Group and its founder, for
the benefit of current and future generations.”</em> More than a historical
archive, it is a living bridge connecting the ideals of cooperation,
solidarity, and financial self-empowerment that shaped the movement to the
realities of today’s world.</p>

<p class=MsoNormal>&nbsp;</p>

<h3><strong><span style='font-weight:normal'>Three Pillars of Purpose</span></strong></h3>

<p>The Historical Society structures its work around three central areas of
activity:</p>

<p style='margin-left:.5in;text-indent:-.25in'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><strong><span style='font-weight:normal'>Safeguarding and Promoting
Heritage</span></strong><br>
The Society meticulously preserves artifacts, documents, photographs, and
personal belongings related to Alphonse and Dorimène Desjardins, as well as the
cooperative pioneers who followed them. These materials tell the story of how
one couple’s determination to offer fair and accessible financial services
sparked a movement that continues to shape communities across Canada and
beyond.</p>

<p style='margin-left:.5in;text-indent:-.25in'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><strong><span style='font-weight:normal'>Historical Research</span></strong><br>
Dedicated researchers delve into the origins and evolution of the Desjardins
Group, tracing its expansion from a modest savings cooperative in Lévis,
Quebec, into one of the world’s leading cooperative financial institutions.
Their work not only illuminates the past but also provides valuable insight
into how cooperation and ethical finance can thrive in the modern economy.</p>

<p style='margin-left:.5in;text-indent:-.25in'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span><strong><span style='font-weight:normal'>Historical Interpretation</span></strong><br>
Through exhibitions, educational programs, guided tours, and multimedia
storytelling, the Society brings history to life. It invites visitors,
students, and cooperators to engage directly with the ideas and human values
that inspired Desjardins’ model  values that remain as relevant today as they
were in 1900.</p>

<p class=MsoNormal>&nbsp;</p>

<h3><strong><span style='font-weight:normal'>Serving a Broad Community</span></strong></h3>

<p>The services of the Alphonse Desjardins Historical Society extend well
beyond the walls of its archives. They are available to <strong><span
style='font-weight:normal'>Desjardins Group officers, employees, and members</span></strong>,
as well as to <strong><span style='font-weight:normal'>cooperators in Canada
and abroad</span></strong>  and indeed to <strong><span style='font-weight:
normal'>the general public</span></strong>. Whether one is a researcher
exploring the roots of cooperative banking or a visitor seeking inspiration, the
Society offers a wealth of knowledge and a warm invitation to discover how
ordinary people, united by shared purpose, can transform their communities.</p>

<p class=MsoNormal>&nbsp;</p>

<h3><strong><span style='font-weight:normal'>Step Into History: A Virtual
Experience</span></strong></h3>

<p>For those unable to visit in person, the Society offers an engaging <strong><span
style='font-weight:normal'>15-minute virtual tour</span></strong> of the
birthplace of cooperation. This online experience immerses visitors in the
world of <strong><span style='font-weight:normal'>Alphonse and Dorimène
Desjardins</span></strong>, allowing them to explore the very rooms where ideas
of mutual aid, trust, and economic democracy were first shaped.</p>

<p>Through this digital journey, one can <em>witness history as though standing
alongside the founders themselves</em>  hearing their story, seeing their
environment, and understanding how one couple’s vision laid the groundwork for
an entire cooperative movement.</p>

<p><span style='font-family:"Apple Color Emoji"'>&#128073;</span> <strong><span
style='font-weight:normal'>Discover the birthplace of cooperation in a
15-minute virtual tour</span></strong> on the <a
href="https://www.desjardins.com" target="_new">official website of Desjardins
Group</a>.</p>

<p class=MsoNormal>&nbsp;</p>

<h3><strong><span style='font-weight:normal'>Why It Matters Today</span></strong></h3>

<p>The Alphonse Desjardins Historical Society is far more than a custodian of
the past. It is a reminder that the cooperative model  rooted in trust,
solidarity, and shared responsibility  remains one of the most humane and
resilient approaches to economic life. In a world often defined by competition
and inequality, the Society keeps alive the message that financial systems can
and should serve people first.</p>

<p>Through its commitment to education, preservation, and interpretation, the
Society ensures that the legacy of Alphonse and Dorimène Desjardins continues
to inspire new generations to believe in the enduring power of cooperation.</p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif'>&nbsp;</span></p>

<p class=MsoNormal><span style='font-family:"Calibri",sans-serif'>PDF report on
Maison Alphonce Desjardins - </span><a
href="https://www.desjardins.com/ressources/pdf/d05-maison-alphonse-desjardins-e.pdf">



style='font-family:"Calibri",sans-serif'>https://www.desjardins.com/ressources/pdf/d05-maison-alphonse-desjardins-e.pdf</span></a><span
style='font-family:"Calibri",sans-serif'> </span></p>

</section>

<style>
<!--
 /* Font Definitions */
 @font-face
 {font-family:Wingdings;
 panose-1:5 0 0 0 0 0 0 0 0 0;}
@font-face
 {font-family:"Cambria Math";
 panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
 {font-family:Calibri;
 panose-1:2 15 5 2 2 2 4 3 2 4;}
@font-face
 {font-family:Aptos;
 panose-1:2 11 0 4 2 2 2 2 2 4;}
@font-face
 {font-family:"Aptos Display";
 panose-1:2 11 0 4 2 2 2 2 2 4;}
@font-face
 {font-family:"Apple Color Emoji";}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
 {margin:0in;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;}
h1
 {mso-style-link:"Heading 1 Char";
 margin-top:.25in;
 margin-right:0in;
 margin-bottom:4.0pt;
 margin-left:0in;
 page-break-after:avoid;
 font-size:20.0pt;
 font-family:"Aptos Display",sans-serif;
 color:#0F4761;
 font-weight:normal;}
h2
 {mso-style-link:"Heading 2 Char";
 margin-top:8.0pt;
 margin-right:0in;
 margin-bottom:4.0pt;
 margin-left:0in;
 page-break-after:avoid;
 font-size:16.0pt;
 font-family:"Aptos Display",sans-serif;
 color:#0F4761;
 font-weight:normal;}
h3
 {mso-style-link:"Heading 3 Char";
 margin-top:8.0pt;
 margin-right:0in;
 margin-bottom:4.0pt;
 margin-left:0in;
 page-break-after:avoid;
 font-size:14.0pt;
 font-family:"Times New Roman",serif;
 color:#0F4761;
 font-weight:normal;}
h4
 {mso-style-link:"Heading 4 Char";
 margin-top:4.0pt;
 margin-right:0in;
 margin-bottom:2.0pt;
 margin-left:0in;
 page-break-after:avoid;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;
 color:#0F4761;
 font-style:italic;}
h5
 {mso-style-link:"Heading 5 Char";
 margin-top:4.0pt;
 margin-right:0in;
 margin-bottom:2.0pt;
 margin-left:0in;
 page-break-after:avoid;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;
 color:#0F4761;
 font-weight:normal;}
h6
 {mso-style-link:"Heading 6 Char";
 margin-top:2.0pt;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:0in;
 page-break-after:avoid;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;
 color:#595959;
 font-style:italic;}
p.MsoHeading7, li.MsoHeading7, div.MsoHeading7
 {mso-style-link:"Heading 7 Char";
 margin-top:2.0pt;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:0in;
 page-break-after:avoid;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;
 color:#595959;}
p.MsoHeading8, li.MsoHeading8, div.MsoHeading8
 {mso-style-link:"Heading 8 Char";
 margin:0in;
 page-break-after:avoid;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;
 color:#272727;
 font-style:italic;}
p.MsoHeading9, li.MsoHeading9, div.MsoHeading9
 {mso-style-link:"Heading 9 Char";
 margin:0in;
 page-break-after:avoid;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;
 color:#272727;}
p.MsoToc1, li.MsoToc1, div.MsoToc1
 {margin-top:12.0pt;
 margin-right:0in;
 margin-bottom:6.0pt;
 margin-left:0in;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;
 font-weight:bold;}
p.MsoToc2, li.MsoToc2, div.MsoToc2
 {margin-top:6.0pt;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:12.0pt;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;
 font-style:italic;}
p.MsoToc3, li.MsoToc3, div.MsoToc3
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:24.0pt;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;}
p.MsoToc4, li.MsoToc4, div.MsoToc4
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:.5in;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;}
p.MsoToc5, li.MsoToc5, div.MsoToc5
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:48.0pt;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;}
p.MsoToc6, li.MsoToc6, div.MsoToc6
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:60.0pt;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;}
p.MsoToc7, li.MsoToc7, div.MsoToc7
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:1.0in;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;}
p.MsoToc8, li.MsoToc8, div.MsoToc8
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:84.0pt;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;}
p.MsoToc9, li.MsoToc9, div.MsoToc9
 {mso-style-link:"Heading 9 Char";
 margin:0in;
 page-break-after:avoid;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;
 color:#272727;}
p.MsoToc1, li.MsoToc1, div.MsoToc1
 {margin-top:12.0pt;
 margin-right:0in;
 margin-bottom:6.0pt;
 margin-left:0in;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;
 font-weight:bold;}
p.MsoToc2, li.MsoToc2, div.MsoToc2
 {margin-top:6.0pt;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:12.0pt;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;
 font-style:italic;}
p.MsoToc3, li.MsoToc3, div.MsoToc3
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:24.0pt;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;}
p.MsoToc4, li.MsoToc4, div.MsoToc4
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:.5in;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;}
p.MsoToc5, li.MsoToc5, div.MsoToc5
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:48.0pt;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;}
p.MsoToc6, li.MsoToc6, div.MsoToc6
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:60.0pt;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;}
p.MsoToc7, li.MsoToc7, div.MsoToc7
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:1.0in;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;}
p.MsoToc8, li.MsoToc8, div.MsoToc8
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:84.0pt;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;}
p.MsoToc9, li.MsoToc9, div.MsoToc9
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:96.0pt;
 font-size:10.0pt;
 font-family:"Aptos",sans-serif;}
p.MsoTitle, li.MsoTitle, div.MsoTitle
 {mso-style-link:"Title Char";
 margin-top:0in;
 margin-right:0in;
 margin-bottom:4.0pt;
 margin-left:0in;
 font-size:28.0pt;
 font-family:"Aptos Display",sans-serif;
 letter-spacing:-.5pt;}
p.MsoTitleCxSpFirst, li.MsoTitleCxSpFirst, div.MsoTitleCxSpFirst
 {mso-style-link:"Title Char";
 margin:0in;
 font-size:28.0pt;
 font-family:"Aptos Display",sans-serif;
 letter-spacing:-.5pt;}
p.MsoTitleCxSpMiddle, li.MsoTitleCxSpMiddle, div.MsoTitleCxSpMiddle
 {mso-style-link:"Title Char";
 margin:0in;
 font-size:28.0pt;
 font-family:"Aptos Display",sans-serif;
 letter-spacing:-.5pt;}
p.MsoTitleCxSpLast, li.MsoTitleCxSpLast, div.MsoTitleCxSpLast
 {mso-style-link:"Title Char";
 margin-top:0in;
 margin-right:0in;
 margin-bottom:4.0pt;
 margin-left:0in;
 font-size:28.0pt;
 font-family:"Aptos Display",sans-serif;
 letter-spacing:-.5pt;}
p.MsoSubtitle, li.MsoSubtitle, div.MsoSubtitle
 {mso-style-link:"Subtitle Char";
 margin-top:0in;
 margin-right:0in;
 margin-bottom:8.0pt;
 margin-left:0in;
 font-size:14.0pt;
 font-family:"Times New Roman",serif;
 color:#595959;
 letter-spacing:.75pt;}
a:link, span.MsoHyperlink
 {color:#467886;
 text-decoration:underline;}
a:visited, span.MsoHyperlinkFollowed
 {color:#96607D;
 text-decoration:underline;}
p
 {margin-right:0in;
 margin-left:0in;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;}
p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:.5in;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;}
p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:.5in;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;}
p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:.5in;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;}
p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast
 {margin-top:0in;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:.5in;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;}
p.MsoQuote, li.MsoQuote, div.MsoQuote
 {mso-style-link:"Quote Char";
 margin-top:8.0pt;
 margin-right:0in;
 margin-bottom:8.0pt;
 margin-left:0in;
 text-align:center;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;
 color:#404040;
 font-style:italic;}
p.MsoIntenseQuote, li.MsoIntenseQuote, div.MsoIntenseQuote
 {mso-style-link:"Intense Quote Char";
 margin-top:.25in;
 margin-right:.6in;
 margin-bottom:.25in;
 margin-left:.6in;
 text-align:center;
 border:none;
 padding:0in;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;
 color:#0F4761;
 font-style:italic;}
span.MsoIntenseEmphasis
 {color:#0F4761;
 font-style:italic;}
span.MsoIntenseReference
 {font-variant:small-caps;
 color:#0F4761;
 letter-spacing:.25pt;
 font-weight:bold;}
p.MsoTocHeading, li.MsoTocHeading, div.MsoTocHeading
 {margin-top:24.0pt;
 margin-right:0in;
 margin-bottom:0in;
 margin-left:0in;
 line-height:115%;
 page-break-after:avoid;
 font-size:14.0pt;
 font-family:"Aptos Display",sans-serif;
 color:#0F4761;
 font-weight:bold;}
span.Heading1Char
 {mso-style-name:"Heading 1 Char";
 mso-style-link:"Heading 1";
 font-family:"Aptos Display",sans-serif;
 color:#0F4761;}
span.Heading2Char
 {mso-style-name:"Heading 2 Char";
 mso-style-link:"Heading 2";
 font-family:"Aptos Display",sans-serif;
 color:#0F4761;}
span.Heading3Char
 {mso-style-name:"Heading 3 Char";
 mso-style-link:"Heading 3";
 font-family:"Times New Roman",serif;
 color:#0F4761;}
span.Heading4Char
 {mso-style-name:"Heading 4 Char";
 mso-style-link:"Heading 4";
 font-family:"Times New Roman",serif;
 color:#0F4761;
 font-style:italic;}
span.Heading5Char
 {mso-style-name:"Heading 5 Char";
 mso-style-link:"Heading 5";
 font-family:"Times New Roman",serif;
 color:#0F4761;}
span.Heading6Char
 {mso-style-name:"Heading 6 Char";
 mso-style-link:"Heading 6";
 font-family:"Times New Roman",serif;
 color:#595959;
 font-style:italic;}
span.Heading7Char
 {mso-style-name:"Heading 7 Char";
 mso-style-link:"Heading 7";
 font-family:"Times New Roman",serif;
 color:#595959;}
span.Heading8Char
 {mso-style-name:"Heading 8 Char";
 mso-style-link:"Heading 8";
 font-family:"Times New Roman",serif;
 color:#272727;
 font-style:italic;}
span.Heading9Char
 {mso-style-name:"Heading 9 Char";
 mso-style-link:"Heading 9";
 font-family:"Times New Roman",serif;
 color:#272727;}
span.TitleChar
 {mso-style-name:"Title Char";
 mso-style-link:Title;
 font-family:"Aptos Display",sans-serif;
 letter-spacing:-.5pt;}
span.SubtitleChar
 {mso-style-name:"Subtitle Char";
 mso-style-link:Subtitle;
 font-family:"Times New Roman",serif;
 color:#595959;
 letter-spacing:.75pt;}
span.QuoteChar
 {mso-style-name:"Quote Char";
 mso-style-link:Quote;
 color:#404040;
 font-style:italic;}
span.IntenseQuoteChar
 {mso-style-name:"Intense Quote Char";
 mso-style-link:"Intense Quote";
 color:#0F4761;
 font-style:italic;}
span.hors-ecran
 {mso-style-name:hors-ecran;}
p.flex, li.flex, div.flex
 {mso-style-name:flex;
 margin-right:0in;
 margin-left:0in;
 font-size:12.0pt;
 font-family:"Times New Roman",serif;}
span.ms-1
 {mso-style-name:ms-1;}
span.max-w-15ch
 {mso-style-name:"max-w-\[15ch\]";}
span.-me-1
 {mso-style-name:-me-1;}
span.z-TopofFormChar
 {mso-style-name:"z-Top of Form Char";
 mso-style-link:"z-Top of Form";
 font-family:"Arial",sans-serif;
 display:none;}
span.z-BottomofFormChar
 {mso-style-name:"z-Bottom of Form Char";
 mso-style-link:"z-Bottom of Form";
 font-family:"Arial",sans-serif;
 display:none;}
.MsoChpDefault
 {font-size:12.0pt;
 font-family:"Aptos",sans-serif;}
@page WordSection1
 {size:841.9pt 595.3pt;
 margin:1.0in 1.0in 1.0in 1.0in;}
div.WordSection1
 {page:WordSection1;}
 /* List Definitions */
 ol
 {margin-bottom:0in;}
ul
 {margin-bottom:0in;}
-->
</style>
      `,
      images: ['https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=600&q=90&fit=clip'],
      officialUrl: 'https://www.desjardins.com/ca/about-us/desjardins/who-we-are/our-history-museum/visiting-maison-alphonse-desjardins/index.jsp'
    },

  ];

  constructor() { }

  getCooperativeDetails(id: string): Observable<CooperativeDetails | undefined> {
    const cooperative = this.cooperatives.find(c => c.id === id);
    return of(cooperative);
  }

  getAllCooperatives(): Observable<CooperativeDetails[]> {
    return of(this.cooperatives);
  }
}