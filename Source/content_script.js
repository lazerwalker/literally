walk(document.body);

function walk(node)
{
	// The author of cloud-to-butt stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;
	
	v = v.replace(/\bliterally\b/g, "figuratively");
	v = v.replace(/\bLiterally\b/g, "Figuratively");
	v = v.replace(/\bLITERALLY\b/g, "FIGURATIVELY");

	textNode.nodeValue = v;
}
