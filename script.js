function cekJawaban() {
  let skor = 0;

  const kunci = {
    q1: "a",
    q2: "c",
    q3: "d",
    q4: "a",
    q5: "b"
  };

  for (let key in kunci) {
    let jawaban = document.querySelector(
      'input[name="' + key + '"]:checked'
    );

    if (jawaban && jawaban.value === kunci[key]) {
      skor += 20;
    }
  }

  let hasil = document.getElementById("hasil");

  if (skor >= 70) {
    hasil.innerHTML = "Skor: " + skor + " <br>LULUS ✅";
  } else {
    hasil.innerHTML = "Skor: " + skor + " <br>TIDAK LULUS ❌";
  }
}

function ulangKuis() {
  document.getElementById("quizForm").reset();
  document.getElementById("hasil").innerHTML = "";
}