function beaker_action(beaker_idx)
{
	for(i=1; i<=idx_max; i++)
	{
		$("#"+i)[0].style.border="hidden";
	}

	$("#"+beaker_idx)[0].style.border="dotted";
	$("#"+beaker_idx).css('border-width', '1px');

	$("#collapseroot2")[0].innerHTML="<strong>Methods:</strong><ul><li>Drag the beaker here and there</li><li>Drag other objects into the beaker to see their actions</li></ul>"
	$("#collapseroot2")[0].innerHTML+="<strong>Properties:</strong>"
	$("#collapseroot2")[0].innerHTML+=$("#menu_content_beaker")[0].innerHTML
}