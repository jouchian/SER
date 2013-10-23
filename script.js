// Auslagerung der Methoden muss noch erfolgen

function srecord() { 
	if (document.getElementById("mybutton1").value == "Record") 
		{
		// Search Event Recorder started
		document.getElementById("mybutton1").value = "Stop";
		document.getElementById("status1").value = "Active";
		// Create an User ID 
		
		// Capture URL + Timestamp
		
		/*
		<html><head><title>Test</title>
		</head><body>
		<a href="http://de.yahoo.com/">Yahoo</a><br>
		<a href="http://www.google.de/">Google</a><br>
		<a href="http://www.selfhtml.org/">SELFHTML</a><br>
		<script type="text/javascript">
			for (var i = 0; i < document.links.length; ++i)
				document.write("<br>" + document.links[i]);
		</script>
		</body></html>
		*/		
		
		// Capture Meta Data
		
		/*
		<script type="text/javascript"> 
			document.write("<p>Anzahl der Links: " + document.links.length + "<\/p>");
			Angewendet auf den aktiv betrachteten Tab/Fenster/Website mit window.focused?
		</script>
		*/
		
		}
	else
		{
		// Capturing has been stopped by user or Capturing has not yet been started 
		document.getElementById("mybutton1").value = "Record";
		document.getElementById("status1").value = "Not active";
		
		// Check if User ID has been created
		
		// Write Captured Data into CVS File
		
		}
	}
			
function main() {
  // Initialization work goes here.
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("mybutton1").addEventListener("click",srecord);
  main();
});

