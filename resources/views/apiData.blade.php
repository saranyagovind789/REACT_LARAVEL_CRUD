<h1>Data from API </h1>
<table border ="2" style="width:50%" >

<tr>
    <td width="80px"> ID </td>
    <td>@sortablelink('name') </td>
    <td> year </td>
    <td> colour </td>
</tr>

@foreach ($collection as $item)
<tr>
    <td> {{$item ['id']}} </td>
    <td> {{$item ['name']}} </td>
    <td> {{$item ['year']}} </td>
    <td> {{$item ['color']}} </td>
</tr>
     
@endforeach   
  </table>