function beaker_action()
{
	$("#collapseroot2")[0].innerHTML="<strong>Methods:</strong><ul><li>Drag the beaker here and there</li><li>Drag other objects into the beaker to see their actions</li></ul>"
	$("#collapseroot2")[0].innerHTML+="<strong>Properties:</strong>"
	$("#collapseroot2")[0].innerHTML+=$("#menu_content_beaker")[0].innerHTML
}